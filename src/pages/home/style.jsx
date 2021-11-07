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
        box-sizing: border-box;
        height: 400px;
        margin: 40px 40px 0 0;
        text-align: center;
        width: 22%;

        &:nth-child(4n+1){
            margin-left: 40px;
        }

        &:hover{
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
            
        }

        *{
            background: #FFF;
        }

        img{
            border-radius: inherit;
            object-fit: cover;
            height: 200px;
            width: 100%;

        }

        div{
            display: flex;
            flex-direction: column;
            height: 200px;
            justify-content: space-between;
            padding: 15px;
        
            h2{
                font-size: 1.1rem;
            }

            p{
                font-size: 0.9rem;
            }
        }
    }
`