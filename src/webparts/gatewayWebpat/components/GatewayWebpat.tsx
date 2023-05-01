import * as React from 'react';
import styles from './GatewayWebpat.module.scss';
import { IGatewayWebpatProps } from './IGatewayWebpatProps';
import { escape } from '@microsoft/sp-lodash-subset';
import CorporatePlans from '../CorporatePlans/components/CorporatePlans';
import IndividualPlanC from '../IndividualPlans/component/IndividualPlan';
import * as jquery from 'jquery';

export interface IStateWebpart{
  items:[
    {
      "Vision":"",
      "Mission":"",
      "CoreValues":"",
      "CorporateDocuments":"",
      "CorporateInitiatives":""
    }

  ]
}

export default class GatewayWebpat extends React.Component<IGatewayWebpatProps, IStateWebpart> {
constructor(props:IGatewayWebpatProps,state:IStateWebpart){
  super(props);
  this.state={
    items:[
      {
        "Vision":"",
        "Mission":"",
        "CoreValues":"",
        "CorporateDocuments":"",
        "CorporateInitiatives":""
      }
    ]
  }
}

public componentDidMount(){ 
  var reactHandler = this; 
  jquery.ajax({ 
      url: `${this.props.siteurl}/_api/web/lists/getbytitle('BoardOfDirectors')/items`, 
      type: "GET", 
      headers:{'Accept': 'application/json; odata=verbose;'}, 
      success: function(resultData) { 
        reactHandler.setState({ 
          items: resultData.d.results 
        }); 
      }, 
      error : function(jqXHR, textStatus, errorThrown) { 
      } 
  }); 
} 
  public render(): React.ReactElement<IGatewayWebpatProps> {
   

    return (
      <div className="pfo_ReportSiteMain">

<div className={styles.pfo_directors }>
  <div className={styles.pfo_CustomTable}>
            <div className={styles.pfo_TableCaption}>
                <h4>Board of Directors</h4>
            </div>
            <div className={styles.pfo_TableBody}>
                <div className={styles.pfo_tableWrapper}>
                    <div className={styles.pfo_TableColumn}>
                    
                            <div className={styles.tableColumnTitle}>
                            <ul>
                              <li>
                            <a href="#" className={styles.two}>Vision</a>
                              </li>
                              </ul></div>
                              
                    </div>
                    <div className={styles.pfo_TableColumn}>
                      <div className={styles.tableColumnTitle}>
                        <ul>
                        <li>
                          <a href='#' className={styles.two}>Mission</a>
                        </li>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.pfo_TableColumn}>
                      <div className={styles.tableColumnTitle}>
                        <ul>
                        <li>
                          <a href='#' className={styles.two}>Core Values</a>
                        </li>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.pfo_TableColumn}>
                      <div className={styles.tableColumnTitle}>
                        <ul>
                        <li>
                          <a href='#' className={styles.two}>Corporate Documents</a>
                        </li>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.pfo_TableColumn}>
                      <div className={styles.tableColumnTitle}>
                        <ul>
                        <li>
                          <a href='#' className={styles.two}>Corporate Initiatives</a>
                        </li>
                        </ul>
                      </div>
                    </div>
            </div>
            
            </div>
            </div>
            </div>
            
            <br/>
            <CorporatePlans description={''} siteurl={''}></CorporatePlans>
            
            <br/>
            <IndividualPlanC description={''} siteurl={''}></IndividualPlanC>
      </div>
    )


  }
}
