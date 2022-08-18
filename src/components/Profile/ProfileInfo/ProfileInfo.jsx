import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <section className={`${s.profileInfo} content-block`}>
            <h1 className={`${s.profileInfo__header}`}>Danil Vasilenko</h1>
            <p className={`${s.profileInfo__status}`}>пишите в telegram: @blednoe_plamya</p>
            {/*<hr/>*/}

            <dl className={`${s.profileInfo__mainInfo}`}>

                <dt>Birthday:</dt>
                <dd>June 29, 1990</dd>


                <dt>Current city:</dt>
                <dd>Tyumen</dd>

                <dt>Studied at:</dt>
                <dd>TSU</dd>

            </dl>


        </section>
    )

}

export default ProfileInfo;