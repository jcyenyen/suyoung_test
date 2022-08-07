import React, { useState, useEffect } from "react";
import axios from "axios";
import MemberCenter from "../Member/components/memberCenter";
import MemberCenterCenter from "../Member/components/MemberCenterCenter";

function Member(props) {
    return (
        <>
            <MemberCenter>
                <MemberCenterCenter />
            </MemberCenter>
        </>
    );
}

export default Member;
