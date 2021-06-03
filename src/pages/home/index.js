import React, { useEffect } from 'react'
import {PageArea, SearchArea} from './styled'
import useAPI from '../../helpers/OlxAPI'
import{Link}from 'react-router-dom'

import {PageContainer, } from '../../components/MainComponents';

const Page = () => {
    const api = useAPI();

    const [stateList, setStateList] = React.useState([]);
    const [categories, setCategories] = React.useState([])

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
                    ...
                </PageArea>
            </PageContainer>
        </>
    );
}
export default Page