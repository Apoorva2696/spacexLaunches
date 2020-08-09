import React from 'react';
import queryString from 'query-string';
import axios from 'axios';


class Cards extends React.Component{

    constructor(props) {
      super(props);
  
      this.state = {
        filters: props.filters,
        response: {},
        isFetching: false
      };
  
      this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        const filters = this.state.filters;
        const _params = 0 !== Object.keys( filters ).length ? `?${ queryString.stringify(filters) }`: null;

        this.getData(_params,filters);
    }

    componentWillReceiveProps( nextProps ) {
        if( JSON.stringify( this.props.filters ) !== JSON.stringify( nextProps.filters ) ){
            const _params = 0 !== Object.keys( nextProps.filters ).length ? `?${ queryString.stringify(nextProps.filters) }`: null;
            this.getData(_params,nextProps.filters);
        }
    }

    getData(_params,filters) {
        const getResponse = async () => {
            this.setState( { isFetching:true } );
            let _res = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100${_params}`);
            return _res;
        };

        getResponse().then( ( data ) => {

            if( null !== _params ) {
                window.history.replaceState( filters, 'params', `${_params}`);
            };

        this.setState( { response: data, isFetching: false } );
        } );
    }
  

    render() {

        const { isFetching, response } = this.state;
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
        } else if( isFetching ){
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