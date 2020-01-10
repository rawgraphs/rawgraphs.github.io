import React from 'react'
import styles from './sponsorsGrid.module.scss'

const specialSponsors  = [
  {
    logo: '/sponsors-logo/zazuko.png',
    link: 'https://zazuko.com/',
    name: 'Zazuko'
  },
  {
    logo: '/sponsors-logo/fastweb.png',
    link: 'https://www.fastweb.it/',
    name: 'Fastweb'
  },
  {
    logo: '/sponsors-logo/wyman.png',
    link: 'https://www.oliverwyman.com/index.html',
    name: 'Oliver Wyman'
  }

]


const goldSponsors  = [
  {
    logo: '/sponsors-logo/accurat.png',
    link: 'https://www.accurat.it/',
    name: 'Accurat'
  },
  {
    logo: '/sponsors-logo/data4change.png',
    link: 'https://data4chan.ge/',
    name: 'Data for Change'
  },
  {
    logo: '/sponsors-logo/code4africa.png',
    link: 'https://twitter.com/code4africa',
    name: 'Code for Africa'
  },
  {
    logo: '/sponsors-logo/tva.png',
    link: 'https://thevisualagency.com',
    name: 'The Visual Agency'
  },
  {
    logo: '/sponsors-logo/sciencepo.png',
    link: 'https://medialab.sciencespo.fr/',
    name: 'Science Po'
  },
  {
    logo: '/sponsors-logo/dataliteracy.png',
    link: 'https://dataliteracy.com/',
    name: 'Data Literacy'
  },
  {
    logo: '/sponsors-logo/tantlab.png',
    link: 'https://blogs.kcl.ac.uk/ddh/',
    name: 'TantLab'
  },
  {
    logo: '/sponsors-logo/klc.png',
    link: 'https://www.tantlab.aau.dk/',
    name: "Digital Humanitites Department of King's London College"
  },


]


const bronzeSponsors  = [
  {
    logo: '/sponsors-logo/visualizingimpact.png',
    link: 'https://visualizingimpact.org/',
    name: "Visualizing Impact"
  },
  {
    logo: '/sponsors-logo/dataninja.png',
    link: 'https://www.dataninja.it/en/',
    name: 'Data Ninja'
  },
  {
    logo: '/sponsors-logo/trescientosmil.png',
    link: 'http://300000kms.net/',
    name: 'Trecientosmil'
  }

]



export default function SponsorsGrid({showBronze=true}){

  return <div className="text-center">

    <h1>Special sponsors</h1>
    <div className="row">
      {specialSponsors.map((sponsor, i) => <div className="col-sm-4 text-center">
        <a href={sponsor.link} className={styles.link} target="_blank" rel="noopener noreferrer">
        {sponsor.logo && <img className={`img-fluid ${styles.sponsorImage}`} alt={sponsor.name} title={sponsor.name} src={sponsor.logo}></img>}
        </a>
      </div>)}

    </div>

    <h1>Gold sponsors</h1>
    <div className="row">
      {goldSponsors.map((sponsor, i) => <div className="col-sm-3 text-center">
        <a href={sponsor.link} className={styles.link} target="_blank" rel="noopener noreferrer">
        {sponsor.logo && <img className={`img-fluid ${styles.sponsorImage}`} alt={sponsor.name} title={sponsor.name} src={sponsor.logo}></img>}
        </a>
      </div>)}

    </div>

    {showBronze && <><h1>Bronze sponsors</h1>
    <div className="row">

      {bronzeSponsors.map((sponsor, i) => <div className="col-sm-4 text-center">
        <a href={sponsor.link} className={styles.link} target="_blank" rel="noopener noreferrer">
        {sponsor.logo && <img className={`img-fluid ${styles.sponsorImage}`} alt={sponsor.name} title={sponsor.name}  src={sponsor.logo}></img>}
        </a>
      </div>)}
    </div></>}

  </div>
}
