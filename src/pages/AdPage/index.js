import React from 'react'
import {useParams} from 'react-router-dom'
import {PageArea} from './styled'
import useAPI from '../../helpers/OlxAPI'


import {PageContainer} from '../../components/MainComponents';

const Page = () => {
    const api = useAPI();   
    const { id } = useParams();

    cosnt [loading, setLoading] = React.useState(true)
    cosnt [adInfo, setAdInfo] = React.useState(true)  


    return(
        <PageContainer>          
            <PageArea>
             <div className="leftSide">
                <div className="box">
                    <div className="adImage" >

                    </div>
                    <div className="addIngo">
                        <div className="adName"></div>
                        <div className="adDescription"></div>
                    </div>
                </div>
            </div>
             <div className="rightSide">

             </div>
            </PageArea>
        </PageContainer>
    );
}
export default Page