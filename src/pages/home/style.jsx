import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 40px auto;
    width: 90%;

    article{
        background: #FFF;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        height: 400px;
        margin: 40px 40px 0 0;
        width: 22%;

        &:nth-child(4n+1){
            margin-left: 40px;
        }

        &:hover{
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
            
        }
    }
`