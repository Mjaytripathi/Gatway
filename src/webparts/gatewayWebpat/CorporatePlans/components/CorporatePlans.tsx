import * as React from 'react';
import styles from './Corporateplans.module.scss';
import { IGatewayWebpatProps } from '../../components/IGatewayWebpatProps';
import * as jquery from 'jquery';

export interface ICorporatePlansState{
    items:[
        {
            "StrategicPlan":"",
            "OperatingPlan":"",
            "SupportInfrastructurePlan":"",
            "ProjectManagementPlan":"",
            "ProjectManagerDevelopmentPlan":""
        }
    ]
}

export default class CorporatePlans extends React.Component<IGatewayWebpatProps, ICorporatePlansState>{
    constructor(props:IGatewayWebpatProps,state:ICorporatePlansState){
        super(props);
        this.state={
            items:[
                {
                    "StrategicPlan":"",
                    "OperatingPlan":"",
                    "SupportInfrastructurePlan":"",
                    "ProjectManagementPlan":"",
                    "ProjectManagerDevelopmentPlan":""
                }
            ]
        }
    }

    public componentDidMount(){ 
        var reactHandler = this; 
        jquery.ajax({ 
            url: "https://vishalinfo.sharepoint.com/sites/SPFXDEMOS/_api/web/lists/getbytitle('CorporatePlans')/items", 
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
        return(
            
           <>

<div className={styles.pfo_strategicPlan }>
  <div className={styles.pfo_CustomTable}>
            <div className={styles.pfo_TableCaption}>
                <h4>corporate plans</h4>
            </div>
            <div className={styles.pfo_TableBody}>
                <div className={styles.pfo_tableWrapper}>
                    <div className={styles.pfo_TableColumn}>
                    <ul>
                            <li className={styles.tableColumnTitle}>
                            <span>01</span>
                            <a href="#">strategic plan</a>
                              </li>
                              </ul>
                    </div>
                    <div className={styles.pfo_TableColumn}>
                    <ul>
                            <li className={styles.tableColumnTitle}>
                            <span>04</span>
                            <a href="#">operating plan</a>
                              </li>
                              </ul>
                    </div>
                    <div className={styles.pfo_TableColumn}>
                    <ul>
                            <li className={styles.tableColumnTitle}>
                            <span>05</span>
                            <a href="#">support infrastructure plan</a>
                              </li>
                              </ul>
                    </div>
                    <div className={styles.pfo_TableColumn}>
                    <ul>
                            <li className={styles.tableColumnTitle}>
                            <span>06</span>
                            <a href="#">project management plan</a>
                              </li>
                              </ul>
                    </div>
                    <div className={styles.pfo_TableColumn}>
                    <ul>
                            <li className={styles.tableColumnTitle}>
                            <span>07</span>
                            <a href="#">project manager development plan</a>
                              </li>
                              </ul>
                    </div>
                    </div>
            </div>

                    {this.state.items.map(function(item,key){ 
             
             return (<div className={styles.pfo_TableBody}> 
             <div className={styles.pfo_tableWrapper} key={key}>
                <div className={styles.pfo_TableColumn }>
                 <div className={styles.tableColumnTitle}><a href='#' className={styles.one}>{item.StrategicPlan}</a></div> 
                 </div>
                 <div className={styles.pfo_TableColumn }>
                 <div className={styles.tableColumnTitle}><a href='#' className={styles.one}>{item.OperatingPlan}</a></div> 
                 </div>
                 <div className={styles.pfo_TableColumn }>
                  <div className={styles.tableColumnTitle}><a href='#' className={styles.one}>{item.SupportInfrastructurePlan}</a></div>
                  </div>
                  <div className={styles.pfo_TableColumn }>
                   <div className={styles.tableColumnTitle}><a href='#' className={styles.one}>{item.ProjectManagementPlan}</a></div>
                   </div>
                   <div className={styles.pfo_TableColumn }>
                   <div className={styles.tableColumnTitle}><a href='#' className={styles.one}>{item.ProjectManagerDevelopmentPlan}</a></div>
               </div>
               </div>
               </div>); 
           })}                     
            
            </div>
            </div>
           </>
         
          
        )
    }
} 
