import React from 'react';
import communityBankLogo from './communityBank.svg';

function Header(){
    return (
        <div className="header">
            <h1>Welcome to Community Bank</h1>
            <img src={communityBankLogo} className="logo" alt="Community Bank Logo" />
        </div>
    )
}


export default Header;