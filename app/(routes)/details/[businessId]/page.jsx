"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import BusinessInfo from '../_components/BusinessInfo';
import SuggestedBusinessList from '../_components/SuggestedBusinessList';
import BusinessDescription from '../_components/BusinessDescription';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

function BusinessDetail({ params }) {

    const { data, status } = useSession();
    const [business, setBusiness] = useState([]);

    useEffect(() => {
        params && getbusinessById();
    }, [params]);

    useEffect(() => {
        checkUserAuth();
    }, []);

    const getbusinessById = () => {
        GlobalApi.getBusinessById(params.businessId).then(resp => {
            console.log("your business details => ", resp?.businessList)
            setBusiness(resp.businessList);
        })
    }

    const checkUserAuth = () => {
        if (status == 'loading') {
            return <p>Loading...</p>
        }

        if (status == 'unauthenticated') {
            signIn('descope');
        }

    }



    // razorpay  payment 
    const makePayment = async () => {
        console.log("here...");
        const res = await initializeRazorpay();

        if (!res) {
            alert("Razorpay SDK Failed to load");
            return;
        }

        // Make API call to the serverless API
        const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
            t.json()
        );
        console.log("razorpay fetched data => ", data);

        var options = {
            key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
            name: "Manu Arora Pvt Ltd",
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            description: "Thankyou for your test donation",
            image: "https://manuarora.in/logo.png",
            handler: function (response) {
                // Validate payment at server - using webhooks is a better idea.
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
            },
            prefill: {
                name: "Aniruddha Gade",
                email: "aniruddhagade39@gmail.com",
                contact: "9999999999",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            // document.body.appendChild(script);

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };

    

    return status == 'authenticated' && business && (
        <div className='py-8 md:py-20 px-10 md:px-36'>
            <BusinessInfo business={business} />


            <div className='grid grid-cols-3 mt-16'>
                <div className='col-span-3 md:col-span-2 order-last md:order-first'>
                    <BusinessDescription business={business} />
                </div>
                <div className=''>
                    <SuggestedBusinessList business={business} />
                </div>
            </div>

        </div>
    )
}

export default BusinessDetail