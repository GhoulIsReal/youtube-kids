import React from 'react';
import * as styled from './DescriptionAndDividerStyles';

const DescriptionAndDivider = () => {
    return(
        <styled.Holder>
            <styled.Divider></styled.Divider>
            <styled.Text>
                <styled.TextParagraph>KidsVi</styled.TextParagraph>
                <styled.TextItself>KidsVi - it's a service where you can run a cartoon in a video player
                    and across the duration of the cartoon there will appear pop-ups with simple games to solve in order 
                    to continue watching the cartoon. Games are focused on development/training of creativity, memory, 
                    reaction, logical thinking. <br /> <br /> Use: Insert URL like:<u className="underlined">https://www.youtube.com/watch?v=aqz-KE-bpKQ</u>  
                    and hit<u className="underlined">"Enter"</u>on your keyboard, and start watching the video <br /> <br /> Supported services: YouTube, 
                    Facebook, SoundCloud, Twitch, Streamable, Vidme, Vimeo, DailyMotion, Vidyard, Wistia <br /> <br /> 
                    Enjoy! We hope you like our service.</styled.TextItself>
            </styled.Text>
        </styled.Holder>
    )
}

export default DescriptionAndDivider;