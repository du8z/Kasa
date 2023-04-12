import './InformationUser.css'

export default function InformationUser ({logement}) {


    return (
        <div className='ContentUser'>
            <div>
                <div className='TitleLocation'>
                    <p>{logement[0].title}</p>
                    <p>{logement[0].location}</p>
                </div>
            </div>
            <div className='NameInformation'>
            <div className='imgInformation'>
                <img src={logement[0].host.picture} alt="" />
                <p>{logement[0].host.name}</p>
            </div>
            </div>
        </div>
    )

}