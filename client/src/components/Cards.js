import React from 'react';
import queryString from 'query-string';
import axios from 'axios';


class Cards extends React.Component{

    constructor(props) {
      super(props);
  
      this.state = {
        filters: props.filters, // filters object
        response: {}, // response for cards data
        isFetching: false // flag for fetching data
      };
  
      this._bind();
    }

    // bind the methods to context
    _bind() {
        this.getData = this.getData.bind(this);
    }

    // fetch data on mount
    componentDidMount() {
        const filters = this.state.filters;
        const _params = 0 !== Object.keys( filters ).length ? `?${ queryString.stringify(filters) }`: null;

        this.getData(_params,filters).then(
            ( res ) => { this.setState( { response: res, isFetching: false } ); }
        ).catch( e => console.error(e) );;
    }

    // check if new filter changed
    static getDerivedStateFromProps( nextProps, prevState ) {
        if( JSON.stringify( prevState.filters ) !== JSON.stringify( nextProps.filters ) ){
            return { ...prevState, filters: nextProps.filters };
        } else return null;
    }

    // check if new data needs to be fetched in case filters have changed
    componentDidUpdate(prevProps, prevState) {
        if( JSON.stringify( this.state.filters ) !== JSON.stringify( prevState.filters ) ){
            const _params = 0 !== Object.keys( this.state.filters ).length ? `?${ queryString.stringify(this.state.filters) }`: null;
            this.getData(_params,this.state.filters).then(
                ( res ) => { this.setState( { response: res, isFetching: false } ); }
            ).catch( e => console.error(e) );
        }
    }

    // make an API request and set the state with the recieved response
    async getData(_params,filters) {

        this.setState( { isFetching:true } );
        let res;

        try {
            res = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100${_params}`);
        } catch (e) {
            console.error(e);
        } finally {
            if( null !== _params ) {
                window.history.replaceState( filters, 'params', `${_params}`);
            };

        }
        return res;
    }
  

    render() {

        const { isFetching, response } = this.state;

        // if response has data then render cards
        if( 0 !== Object.keys( response ).length && !isFetching ) {
            return (
                <div className='cards__container'>
                    {
                    0 < response.data.length ? response.data.map( ( item, index ) => {
                    
                        return(
                        <div className='cards__container__card' key={`${item.mission_name}_${index}`}>
                            <img className='cards__container__card__icon' alt='Mission Logo' src={item.links.mission_patch} width='80%' height='60%'/>
                            <div className='cards__container__card__info'>
                            <div className='cards__container__card__info__title'>{`${item.mission_name} # ${item.flight_number}`}</div>
                            <div className='cards__container__card__info__item'>
                                <span className='cards__container__card__info__item__key'>
                                Mission Ids : 
                                </span>
                                <ul className='cards__container__card__info__item__list'>
                                {
                                    item.mission_id.map( ( mission ) => {
                                    return(
                                        <li className='cards__container__card__info__item__value' key={mission}> {mission}</li>
                                    );
                                    } )
                                }
                                </ul>
                            </div>
                            <div className='cards__container__card__info__item'>
                                <span className='cards__container__card__info__item__key'>
                                Launch Year : 
                                </span>
                                <span className='cards__container__card__info__item__value'>
                                {item.launch_year}
                                </span>
                            </div>
                            <div className='cards__container__card__info__item'>
                                <span className='cards__container__card__info__item__key'>
                                Successful Launch : 
                                </span>
                                <span className='cards__container__card__info__item__value'>
                                { null === item.launch_success ? 'null':item.launch_success.toString() }
                                </span>
                            </div>
                            <div className='cards__container__card__info__item'>
                            <span className='cards__container__card__info__item__key'>
                                Successful Landing :
                                </span>
                                <span className='cards__container__card__info__item__value'>
                                { null === item.rocket.first_stage.cores[0].land_success ? 'null':item.rocket.first_stage.cores[0].land_success.toString() }
                                </span>
                            </div>
                            </div>
                        </div>
                        );
                    }) : <div className='no-data'>No Data Found</div>
                    }
                </div>
            );
        } else if( isFetching ) { // if the component is fetching data show preloaders
            return(
                <div className='cards__container'>
                {
                    [1,2,3,4].map( (val,index) => {
                    return( <div className='cards__container__card__preloader' key={index}>
                        <div className='cards__container__card__icon__preloader'></div>
                        <div className='cards__container__card__info__preloader'></div>
                        <div className='cards__container__card__info__preloader'></div>
                        <div className='cards__container__card__info__preloader'></div>
                    </div> );
                    } )
                }
                </div>
            );
        } else return null;
    }
}

export default Cards;