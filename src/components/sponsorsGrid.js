import React from 'react'

const specialSponsors  = [
  {
    logo: '/sponsors-logo/zazuko.png',
    link: '',
    name: 'Zazuko'
  },
  {
    logo: '/sponsors-logo/fastweb.png',
    link: '',
    name: 'Fastweb'
  },
  {
    logo: '/sponsors-logo/wyman.png',
    link: '',
    name: 'Oliver Wyman'
  }

]


const goldSponsors  = [
  {
    logo: '/sponsors-logo/accurat.png',
    link: '',
    name: 'Accurat'
  },
  {
    logo: '/sponsors-logo/data4change.png',
    link: '',
    name: 'Data for Change'
  },
  {
    logo: '/sponsors-logo/code4africa.png',
    link: '',
    name: 'Code for Africa'
  },
  {
    logo: '/sponsors-logo/tvs.png',
    link: '',
    name: 'The Visual Agency'
  },
  {
    logo: '/sponsors-logo/sciencepo.png',
    link: '',
    name: 'Science Po'
  },
  {
    logo: '/sponsors-logo/dataliteracy.png',
    link: '',
    name: 'Data Literacy'
  },
  {
    logo: '/sponsors-logo/tantlab.png',
    link: '',
    name: 'TantLab'
  },
  {
    logo: '/sponsors-logo/klc.png',
    link: '',
    name: "Digital Humanitites Department of King's London College"
  },
  

]


const bronzeSponsors  = [
  {
    logo: '/sponsors-logo/visualizingimpact.png',
    link: '',
    name: "Visualizing Impact"
  },
  {
    logo: '/sponsors-logo/dataninga.png',
    link: '',
    name: 'Data Ninja'
  },
  {
    logo: '/sponsors-logo/trescientosmil',
    link: '',
    name: 'Trecientosmil'
  }

]



export default function SponsorsGrid({}){

  return <div className="text-center">

    <h1>Special sponsors</h1>
    <div className="row">
      {specialSponsors.map((sponsor, i) => <div className="col-sm-4 text-center">
        {sponsor.logo && <img alt={sponsor.name} title={sponsor.name} className="" src={sponsor.logo}></img>}
      </div>)}

    </div>

    <h1>Gold sponsors</h1>
    <div className="row">
      {goldSponsors.map((sponsor, i) => <div className="col-sm-3 text-center">
        {sponsor.logo && <img alt={sponsor.name} title={sponsor.name} className="" src={sponsor.logo}></img>}
      </div>)}
    
    </div>

    <h1>Bronze sponsors</h1>
    <div className="row"></div>

      {bronzeSponsors.map((sponsor, i) => <div className="col-sm-3 text-center">
        {sponsor.logo && <img alt={sponsor.name} title={sponsor.name} className="" src={sponsor.logo}></img>}
      </div>)}

  </div>
}