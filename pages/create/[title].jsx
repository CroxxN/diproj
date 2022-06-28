import { useRouter } from "next/router";
import Head from 'next/head';
import Button from '../../components/Button.jsx'
import styles from '../../styles/Create.module.css'

const style = (style) => {
    document.execCommand(style, true)
}



const Post = () => {
    
    const router = useRouter();
    const {title} = router.query;
    return (
            <div className={styles.parent}>
                <Head>
                    <title>{title}</title> 
                </Head>
                <main>
                    <div className={styles.headBar}>
                        <ul>"placeholder"</ul>
        
                    </div>
                    <div className={styles.editCont}>
                        <Button text="B" cname='But bold' onClick={e => style("bold")}/>
                        <Button text="I" cname='But italic'/>
                        <Button text="U" cname='But underline'/>

                    </div>
                    
                    <div className={styles.textContainer}>
                        <div className={styles.inside} contentEditable='true'></div>
                    </div>
                </main>
                
            </div>
            )

}

export default Post