/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import Link from 'next/link';
const EmptyPage = () => {
    const [profile, setProfile] = useState(null);

    const fetchProfile = async () => {
        const response = await fetch(
            'https://graph.instagram.com/me/media?fields=media_type%2Cmedia_url%2Ccaption%2Cpermalink&access_token=IGQWRPSFBIRnFpMWh2Nk1XY1dHWll1MGVCMWt0alBvc3VCcTVMTG5TcktobUJXT1pyNjhlSk1pTlNjQkxtT0tKWFNiS1hSQlBINEx1UG92TlJFcXExNjJyTzZAwcHE5RlpvSnNMdkJCRzd5UGVaMk0zaTEtTkZAXRVUZD'
        );
        const data = await response.json();
        setProfile(data.data);
    };

    useEffect(() => {
        fetchProfile();
    }, []);
    console.log(profile);

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className="container">
                        <div className="instagram-feed">
                            <div className="grid">
                                {profile &&
                                    profile.map((post) => (
                                        <Link key={post.id} className="col-12 lg:col-6 xl:col-3" href={post.permalink} target="_blank">
                                            <div>
                                                <div key={post.id} className="card mb-4 instagram-post">
                                                    <img src={post.media_url} alt={post.caption} className="instagram-image" />
                                                    <div className="instagram-caption">{post.caption}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>

                    {/* {profile &&
                        profile.map((post) => (
                            <div key={post.id}>
                                <img src={post.media_url} />
                                <p>{post.caption}</p>
                                <p>{new Date(post.timestamp).toLocaleString()}</p>
                            </div>
                        ))} */}
                </div>
            </div>
        </div>
    );
};

export default EmptyPage;
