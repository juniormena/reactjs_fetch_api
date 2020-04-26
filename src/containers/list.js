import React,{Fragment} from  'react';
import Card from '../components/card/card'


const API = process.env.API;
const token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTg3OTM3MTE3LCJqdGkiOiI2NGZmZTYwZTE1ZGU0ZTQ1YWYyYzk1MTU4MDE5ZmMwZSIsInVzZXJfaWQiOjF9.7THayV79W9YT2RnhCtcjspavVPV4eNhaj7zgIbp7bDw'

class List extends React.Component{

    constructor(props){
        super();
        this.state={
            data:[],
            searchterm:'',
            error:'',
            loading:true
        }
    }//`${API}&s=batman`
    async componentDidMount(){
        const res = await fetch('http://localhost:8000/api/articles/',{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'Authorization':'Bearer ' + token,
                'Access-Control-Allow-Origin': '*',
            }
        });
        const resJson = await res.json();
        console.log(resJson);
        /*this.setState({
            data:resJson.Search,
            loading:false
        })*/
    }

   async handleSubmit(e){
        e.preventDefault();
        if(!this.state.searchterm){
            return this.setState({error:'Please write somthing well'})
        }

        else{
        this.setState({error:''})
        }

        const res = await fetch(`${API}&s=${this.state.searchterm}`);
        const datos = await res.json();
        if(!datos.Search){
            return this.setState({error:'No results'})
        }

        this.setState({data:datos.Search, searchterm:''})
        
    }
    
    render(){
        const {data,loading} = this.state;
        if(loading){
            return <div className="text-center">Loading....</div>
        }
        return( 
            <Fragment>
            <div className="row">
                <div className="col-md-4 offset-md-4 p-4">
                    <form onSubmit={(e)=>this.handleSubmit(e)}>
                        <input type="text" className="form-control" placeholder="Search" onChange={e=>this.setState({searchterm:e.target.value})} value={this.state.searchterm} autoFocus/>
                    </form>
                    <p>{this.state.error ? this.state.error : ''}</p>
                </div>
            </div>
            <div className="row">
            {
                data.map((article,i)=>{
                return <Card key={i} data={article}/>
                })
            }
        </div>
        </Fragment>
        )
    }
}

export default List;