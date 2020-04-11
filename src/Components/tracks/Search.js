import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../../Context'

 class Search extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              trackTitle:''
         }
         this.onChange=this.onChange.bind(this)
        

        }
        findTrack=(dispatch,e)=>{
            e.preventDefault()
            axios
            .get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?
           q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.
          env.REACT_APP_MM_KEY}`)
            .then(res =>{console.log(res.data)
                dispatch({
                    type:'SEARCH_TRACKS',
                    
                    payload:res.data.message.body.track_list
                    
                })
              this.setState({
                  trackTitle:''
              })
           })
            .catch(err => console.error(err));
        }
        onChange=(e)=>{
this.setState({
 [e.target.name]:e.target.value})


   
}
render(){
    
        return (
            <Consumer>
     {value=>{
    const {dispatch} = value
         return(
            <React.Fragment>
            <div className='card card-body mb-4 p-4'>
         <h1 className='display-4 text-center'>
          Search for a Song
         </h1>
         <p className='lead text-center'>
           Get Lyrics for Any Song
         </p>
         <form onSubmit={this.findTrack.bind(this,dispatch)}>
             <div className='form-group'>
    <input type='text' className='form-control 
    form-control-lg'
     placeholder='Type In Your Song' 
    name='trackTitle' value={this.state.trackTitle}
        onChange={this.onChange}
   />
  
             </div>
             <button className='btn btn-primary btn-lg btn-block mb-5'
              type='Submit'>Get Lyrics</button>
         </form>
            </div>
            </React.Fragment>
         
         )
     }}

             </Consumer>

        )
    
}
 }

export default Search
