import React, { useEffect } from 'react'
import {PageArea, SearchArea} from './styled'
import useAPI from '../../helpers/OlxAPI'
import{Link}from 'react-router-dom'

import {PageContainer, } from '../../components/MainComponents';
import AdItem from '../../components/partials/addItem'

const Page = () => {
    const api = useAPI();

    const [stateList, setStateList] = React.useState([]);
    const [categories, setCategories] = React.useState([])
    const [adList, setAdList] = React.useState([])

    React.useEffect(()=>{
        const getStates = async()=> {
            const slist = await api.getStates();

            setStateList(slist)
        }
        getStates();
    },[])
    
    React.useEffect(()=>{
        const getCategories = async()=> {
            const slist = await api.getCategories();
            setCategories(slist)
        }
        getCategories();
    },[])     

    React.useEffect(()=>{
        const getRecentsAds = async()=> {
            const json = await api.getAds({
                sort:'desc',
                limit:8
            });
            setAdList(json.ads)
        }
        getRecentsAds();
    },[])    
    
    return(
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name='q' placeholder="O que você procura"/>                          
                            <select name="state">
                                {stateList &&
                                stateList.map((i, k)=>
                                    <option key={k} value={i.name}>{i.name}</option>
                                )
                                }
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categories.map((i,k)=>
                        <Link key={k} to={`/ads?cat=${i.slug}`}   className="categoryItem">
                            <img src={i.img} alt=""/>
                            <span>{i.name}</span>
                        </Link>)

                        }
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>           
                <PageArea>
                    <h2>Anúncios Recentes</h2>
                    <div className="list">
                        {adList.map((i,k)=>
                            <AdItem key={k} data={i}/>
                        )}
                    </div>
                    <Link to="/ads" className="seeAllLinks">Ver Todos</Link>
                    <hr/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                </PageArea>
            </PageContainer>
        </>
    );
}
export default Page