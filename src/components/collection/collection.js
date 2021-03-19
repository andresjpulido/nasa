import React,{useState, useEffect} from 'react';
import './collection.scss'

export default function Collection(props) {
 
    const [collection, setCollection] = useState(null);
 
    const [url, setUrl] = useState(props.url);
    setUrl(props.url)

    useEffect(() => {
        fetchCollection();
        
        async function fetchCollection() {
            const res = await fetch(url, {
                
            }).catch((error) => {             
                setCollection({error:{code:"net", message:"ERR_NAME_NOT_RESOLVED"}})});
        
            if(res){
                const data = await res.text();
                setCollection(data);
            }
        }

    }, [url]);

 
    if(!collection){
        return(<div></div>)
    }
 
    const json = collection === "" ? [] : JSON.parse(collection);
             
    const collectionItems = json.map((item, index)=>{
        switch(item.substring(item.length - 3, item.length)){
            case "png":
                return <img src={item} alt={item} key={index}/>
            case "jpg":
                return <img src={item} alt={item} key={index} />
            case "srt":
                return <div className="file" key={index}><a href={item} target="_blank" rel="noreferrer">srt file</a></div>
            case "son":
                return <div className="file" key={index}><a href={item} target="_blank" rel="noreferrer">metadata file</a></div>
            case "vtt":
                return <div className="file" key={index}><a href={item} target="_blank" rel="noreferrer">vtt file</a></div>                    
            case "mp4":
                return  <video controls key={index}>
                            <source src={item} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> 
            default:
                return <img src={item} alt={item} key={index}/>
        }
    }) 

    return (
        <div id="collectionItems">{collectionItems}</div>
    )

}