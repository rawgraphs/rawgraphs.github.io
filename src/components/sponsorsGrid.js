import React from 'react'

const specialSponsors  = [
  {
    logo: '/sponsors/',
    link: '',
    name: ''
  },
  {
    logo: '/sponsors/',
    link: '',
    name: ''
  },
  {
    logo: '/sponsors/',
    link: '',
    name: ''
  }

]


const goldSponsors  = [
  {
    logo: '/sponsors/',
    link: '',
    name: ''
  },
  {
    logo: '/sponsors/',
    link: '',
    name: ''
  },
  {
    logo: '/sponsors/',
    link: '',
    name: ''
  }

]


const bronzeSponsors  = [
  {
    logo: '/sponsors/',
    link: '',
    name: ''
  },
  {
    logo: '/sponsors/',
    link: '',
    name: ''
  },
  {
    logo: '/sponsors/',
    link: '',
    name: ''
  }

]



export default function SponsorsGrid({}){

  return <div className="text-center">

    <div className="row">
      {specialSponsors.map((sponsor, i) => <div className="col-sm-4 text-center">
        {sponsor.logo && <img alt={sponsor.name} title={sponsor.name} className="" src={sponsor.logo}></img>}
      </div>)}

    </div>

    <div className="row">
      {goldSponsors.map((sponsor, i) => <div className="col-sm-3 text-center">
        {sponsor.logo && <img alt={sponsor.name} title={sponsor.name} className="" src={sponsor.logo}></img>}
      </div>)}
    
    </div>


    <div className="row"></div>

      {bronzeSponsors.map((sponsor, i) => <div className="col-sm-3 text-center">
        {sponsor.logo && <img alt={sponsor.name} title={sponsor.name} className="" src={sponsor.logo}></img>}
      </div>)}

  </div>
}