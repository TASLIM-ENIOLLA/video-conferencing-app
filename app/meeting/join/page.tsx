"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { useRouter } from 'next/navigation'

import ToggleButton from "@/elements/ToggleButton";

import CamStreamer from "@/utils/CamStreamer";

export default function Page() {
  const camViewer = useRef <any> (null);

  const router = useRouter();

  const [ mediaAvailable, setMediaAvailable ] = useState <boolean> (false);
  const [ meetingParams, setMeetingParams ] = useState <MeetingParamsType> ({
    name: "",
    video: false,
    audio: false,
  });

  useEffect(() => {
    const { isUserMediaAvailable, getStream }: CamStreamer = new CamStreamer();
    
    setMediaAvailable(isUserMediaAvailable);

    if(meetingParams.video) {
      getStream()
      .then(stream => camViewer.current.srcObject = stream)
      .catch(error => console.warn(`The following error occured: ${error}`));
    }
    else if(camViewer.current.srcObject) {
      const stream = camViewer.current.srcObject;
      const tracks = stream.getTracks();

      for(let i = 0; i < tracks.length; i++) {
        const track = tracks[i];

        track.stop();
      }

      camViewer.current.srcObject = null;
    }
  }, [meetingParams.video]);

  function onSubmit (event: FormEvent): void {
    event.preventDefault();

    const getData = Object.entries(meetingParams);
    const getDataQuery = getData.map((data) => data.join("=")).join('&');
    
    router.push(`./session?${getDataQuery}`);
  }

  return (
    <section className="py-20 max-w-[500px] mx-auto">
      <div className="h-[300px]">
        <video
          autoPlay={true}
          ref={camViewer}
          style={{ objectFit: 'cover' }}
          className="rounded-lg bg-gray-200 w-full h-full block"
        ></video>
      </div>
      <div className="py-5 space-y-10">
        <div className="text-center space-x-10">
          <ToggleButton
            type="video"
            title="Toggle video"
            disabled={!mediaAvailable}
            onToggle={(state: boolean) => setMeetingParams(n => ({...n, video: state}))}
          />
          <ToggleButton
            type="audio"
            title="Toggle audio"
            disabled={!mediaAvailable}
            onToggle={(state: boolean) => setMeetingParams(n => ({...n, audio: state}))}
          />
        </div>
        <form
          method="GET"
          className="max-w-[300px] space-y-5 mx-auto"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            autoFocus={true}
            value={meetingParams.name}
            onChange={({target: {value}}) => setMeetingParams(n => ({...n, name: value}))}
            placeholder="Please enter name" className="text-gray-600 capitalize font-bold focus:outline-none text-center bg-gray-200 rounded-tl-lg rounded-tr-lg border-b-2 border-b-blue-500 border-0 border block w-full p-4"
          />
          <input
            type="submit"
            value="join room"
            className="bg-blue-500 p-4 cursor-pointer text-white font-bold rounded-lg uppercase block w-full"
          />
        </form>
      </div>
      <div className="pt-10">
        <details>
          <summary className="text-center cursor-pointer py-2 text-blue-500 font-bold capitalize">perform tests</summary>
          <div className="bg-red-400 p-10"></div>
        </details>
      </div>
    </section>
  );
}

type MeetingParamsType = {
  name: string,
  video: boolean,
  audio: boolean
}