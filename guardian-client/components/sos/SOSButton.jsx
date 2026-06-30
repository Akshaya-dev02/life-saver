"use client";
import notify from "@/hooks/useNotification";
const handleSOS = async () => {

    // Call your backend API here

    notify(
        "Guardian AI",
        "🚨 SOS Sent Successfully"
    );

};


export default function SOSButton(){

return(

<div className="bg-white rounded-xl shadow p-10 flex justify-center items-center">

<button

className="bg-red-600 hover:bg-red-700 transition text-white text-5xl w-56 h-56 rounded-full shadow-xl"
    
onClick={() => window.location.href = "/sos"}
>

SOS

</button>

</div>

)

}