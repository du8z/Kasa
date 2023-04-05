import './InformationUser.css'

export default function InformationUser ({user}) {


    return (
        <div className='ContentUser'>
            <div>
                <div className='TitleLocation'>
                    <p>{user[0].title}</p>
                    <p>{user[0].location}</p>
                </div>
            </div>
            <div className='NameInformation'>
            <div className='imgInformation'>
                <img src={user[0].host.picture} alt="" />
                <p>{user[0].host.name}</p>
            </div>
            </div>
        </div>
    )

}