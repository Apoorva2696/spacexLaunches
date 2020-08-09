import React from 'react';

//filters data
const FILTERS = [
    {
        id: 'launch_year',
        name: 'Launch Year',
        options: [
            {
                title: '2006',
                value: '2006'
            },
            {
                title: '2007',
                value: '2007'
            },
            {
                title: '2008',
                value: '2008'
            },
            {
                title: '2009',
                value: '2009'
            },
            {
                title: '2010',
                value: '2010'
            },
            {
                title: '2011',
                value: '2011'
            },
            {
                title: '2012',
                value: '2012'
            },
            {
                title: '2013',
                value: '2013'
            },
            {
                title: '2014',
                value: '2014'
            },
            {
                title: '2015',
                value: '2015'
            },
            {
                title: '2016',
                value: '2016'
            },
            {
                title: '2017',
                value: '2017'
            },
            {
                title: '2018',
                value: '2018'
            },
            {
                title: '2019',
                value: '2019'
            },
            {
                title: '2020',
                value: '2020'
            }
        ]
    },
    {
        id: 'launch_success',
        name: 'Successful Launch',
        options: [
            {
                title: 'True',
                value: 'true'
            },
            {
                title: 'False',
                value: 'false'
            }
        ]
    },
    {
        id: 'land_success',
        name: 'Successful Landing',
        options: [
            {
                title: 'True',
                value: 'true'
            },
            {
                title: 'False',
                value: 'false'
            }
        ]
    }
];

// no-op  function
const noop = function() {};

const Filters = ( props ) => {
    const selectedFilters = props.filters;
    return(
        <div className='filters-container'>
            <h2>Filters</h2>
            <span className='filters-container__action' onClick={ () => { props.onClick( {} ) } }>Clear</span>
            {
                FILTERS.map( ( filter, index ) => {
                    return(
                        <div className='filters-container__filter' key={ `${filter.name}__${index}`}>
                            <div className='filters-container__filter__title'>{filter.name}</div>
                            <div className='filters-container__filter__list'>
                                {
                                    filter.options.map( ( option, index ) => {
                                        const _selectedValue = selectedFilters[ filter.id ] ? selectedFilters[ filter.id ]:null;

                                        const _className = _selectedValue !== option.value ? 'filters-container__filter__list__item': 'filters-container__filter__list__item filters-container__filter__list__item--selected'
                                        return(
                                            <button
                                                key={`${filter.name}__${index}`}
                                                className={_className}
                                                onClick={
                                                    () => {
                                                        _selectedValue !== option.value ?
                                                            props.onClick( { ...props.filters, [ filter.id ]: option.value } ): noop()
                                                        }
                                                }
                                            >
                                                {option.title}
                                            </button>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );
                } )
            }
        </div>
    );
};

export default Filters;