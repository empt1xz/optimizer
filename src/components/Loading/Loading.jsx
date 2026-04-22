import Style from './loading.module.css'
export default function Loading () {
    return (
        <>
            <main className={Style.main}>
                <div className={Style.loading}></div>
            </main>
        </>
    )
}