import React from 'react'
import {useParams} from 'react-router-dom'
import {PageArea, Fake} from './styled'
import useAPI from '../../helpers/OlxAPI'


import {PageContainer} from '../../components/MainComponents';

const Page = () => {
    const api = useAPI();   
    const { id } = useParams();

    const [loading, setLoading] = React.useState(true)
    const [adInfo, setAdInfo] = React.useState([])  

    React.useEffect(()=>{
        const getAdInfo = async (id) => {
            const json = await api.getAd(id, true);           
            setAdInfo(json);            
            setLoading(false)           
          
        }
        getAdInfo();
    },[])


    return(
        <PageContainer>          
            <PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage" >
                        {loading && <Fake height={300}/>}
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                {loading && <Fake height={20}/>}
                                {adInfo.title && 
                                    <h2>{adInfo.title}</h2>
                                }
                               
                            </div>
                            <div className="adDescription">
                            {loading && <Fake height={100}/>} 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="box box-padding">
                    {loading && <Fake height={20}/>}
                    {}
                    </div>
                    <div className="box box-padding">
                    {loading && <Fake height={50}/>}
                    </div>

                </div>
            </PageArea>
        </PageContainer>
    );
}
export default Page