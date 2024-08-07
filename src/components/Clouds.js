import "../app/globals.css"

export default function Clouds(){
    return <div id="clouds">
        <img src="/clouds/cloud1.png" alt="Cloud 1" style={{'--i': 1.5 }}/>
        <img src="/clouds/cloud2.png" alt="Cloud 2" style={{'--i': 2 }}/>
        <img src="/clouds/cloud3.png" alt="Cloud 3" style={{'--i': 3 }}/>
        <img src="/hello_there.png" id="Hello" alt="Cloud 3"/>
        <img src="/clouds/cloud4.png" alt="Cloud 4" style={{'--i': 4 }}/>
        <img src="/clouds/cloud5.png" alt="Cloud 5" style={{'--i': 5 }}/>
    </div>
}