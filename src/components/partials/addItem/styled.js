import styled from 'styled-components'

export const Item = styled.div `
a{
    display:block;
    border:1px solid #FFF;
    margin:10px;
    text-decoration:none;
    padding:10x;
    border-radius:5px;
    color:#000;
    background:#FFF;
    transition:all ease .2s;

        &:hover {
            border:2px solid #CCC;
            background:#DDD;
        }

    .itemImage img{
        width:100%;
        border-radius:5px;        
    }
    .itemName {       
        font-weight:bold;
    }
  
}

` 