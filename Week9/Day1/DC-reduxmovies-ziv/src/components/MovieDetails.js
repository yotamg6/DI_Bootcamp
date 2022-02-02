import {connect} from 'react-redux';

const MovieDetails = (props) => {
    // console.log(props.itemDetail);
    if(props.itemDetail){
        return(
            <>
                <h1>Movie Details</h1>
                <p>{props.itemDetail.title} </p>
                <p>{props.itemDetail.releaseDate} </p>
                <p>{props.itemDetail.rating} </p>
            </>
        )
    }else{
        return(
            <>
                no items yet
            </>
        )
    }
    
}
const mapStateToProps = (state) =>{
    return{
        itemDetail: state.itemDetail,
    }
}
export default connect(mapStateToProps) (MovieDetails);