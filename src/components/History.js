import React, { Component } from 'react';
import Sectionhead from './sectionhead';


class History extends Component{
    render(){
        return(
            <div>
                <Sectionhead heading="History"/>
                <div className="container py-5">
                <ul>
                    <li>Since inception back in 1990, the idea is to strive to raise the standard of construction industry. The Brains behind the SANA BUILDERS & DEVELOPERS streamline a strong dedication and Professionalism of High Standard in their work and site environment.</li>
                   <br /> <li>Member of ABAD (Association of Builders & Developers) under the title of “Mehtab Builders & Developers” and “Sana Corporation”.</li>
                   <br /> <li>Licensed by B.C.A. (Sindh Building Control Authority) under the Title of “Mehtab Builders & Developers”</li>
                   <br /> <li>Under the Title of M. R. Group of Companies, Four Sub-Companies (Sana Enterprises, Sana Corporation, Sana & Co., and Sana Associates) have been registered in B.R.</li>
                   <br /> <li>We put main emphasis on immaculate planning for every project and offers practical and preferred ideas in housing. People at Sana Builders believes in creativity and innovation. Comprising a team of highly qualified, experienced and dedicated professionals, our experts continuously strive for building and development of the housing demands of maximum number of people.</li>
                </ul>
                </div>
            </div>
        );
    }
}

export default History;