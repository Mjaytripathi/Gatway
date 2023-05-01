import * as React from 'react';
import styles from './IndividualPlan.module.scss';
import { IGatewayWebpatProps } from '../../components/IGatewayWebpatProps';
import * as jquery from 'jquery';

export interface IIndividualPlansState{
    items:[
        {
            "ChiefExecutiveOfficerPlan":"",
            "ChiefOperatingOfficerPlan":"",
            "DirectorOfProjectManagementPlan":"",
            "DirectorOfBusinessDevelopmentPla":"",
            "ProjectManagerImprovementPlans":""
        }
    ]
}

export default class IndividualPlanC extends React.Component<IGatewayWebpatProps, IIndividualPlansState>{
    constructor(props:IGatewayWebpatProps,state:IIndividualPlansState){
        super(props);
        this.state={
            items:[
                {
    "ChiefExecutiveOfficerPlan":"",
    "ChiefOperatingOfficerPlan":"",
    "DirectorOfProjectManagementPlan":"",
    "DirectorOfBusinessDevelopmentPla":"",
    "ProjectManagerImprovementPlans":""
                }
            ]
        }
    }

    public componentDidMount(){ 
        var reactHandler = this; 
        jquery.ajax({ 
            url: "https://vishalinfo.sharepoint.com/sites/SPFXDEMOS/_api/web/lists/getbytitle('IndividualPlans')/items", 
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
                <h4>Individual plans</h4>
            </div>
            <div className={styles.pfo_TableBody}>
                <div className={styles.pfo_tableWrapper}>
                    <div className={styles.pfo_TableColumn}>
                    <ul>
                            <li className={styles.tableColumnTitle}>
                            <span>02</span>
                            <a href="#">CHIEF EXECUTIVE OFFICER PLAN</a>
                              </li>
                              </ul>
                    </div>
                    <div className={styles.pfo_TableColumn}>
                    <ul>
                            <li className={styles.tableColumnTitle}>
                            <span>03</span>
                            <a href="#">chief operating officer plan</a>
                              </li>
                              </ul>
                    </div>
                    <div className={styles.pfo_TableColumn}>
                    <ul>
                            <li className={styles.tableColumnTitle}>
                            <span>08</span>
                            <a href="#">director of project management plan</a>
                              </li>
                              </ul>
                    </div>
                    <div className={styles.pfo_TableColumn}>
                    <ul>
                            <li className={styles.tableColumnTitle}>
                            <span>09</span>
                            <a href="#">director of business development plan</a>
                              </li>
                              </ul>
                    </div>
                    <div className={styles.pfo_TableColumn}>
                    <ul>
                            <li className={styles.tableColumnTitle}>
                            <span>10</span>
                            <a href="#">project manager imporvement plan</a>
                              </li>
                              </ul>
                    </div>
                    </div>
            </div>

                    {this.state.items.map(function(item,key){ 
             
             return (<div className={styles.pfo_TableBody}> 
             <div className={styles.pfo_tableWrapper} key={key}>
                <div className={styles.pfo_TableColumn }>
                 <div className={styles.tableColumnTitle}><a href='#' className={styles.one}>{item.ChiefExecutiveOfficerPlan}</a></div> 
                 </div>
                 <div className={styles.pfo_TableColumn }>
                 <div className={styles.tableColumnTitle}><a href='#' className={styles.one}>{item.ChiefOperatingOfficerPlan}</a></div> 
                 </div>
                 <div className={styles.pfo_TableColumn }>
                  <div className={styles.tableColumnTitle}><a href='#' className={styles.one}>{item.DirectorOfProjectManagementPlan}</a></div>
                  </div>
                  <div className={styles.pfo_TableColumn }>
                   <div className={styles.tableColumnTitle}><a href='#' className={styles.one}>{item.DirectorOfBusinessDevelopmentPla}</a></div>
                   </div>
                   <div className={styles.pfo_TableColumn }>
                   <div className={styles.tableColumnTitle}><a href='#' className={styles.one}>{item.ProjectManagerImprovementPlans}</a></div>
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
