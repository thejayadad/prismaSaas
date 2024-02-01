import getServerUser from '@/lib/getServerUser'
import React from 'react'
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Stripe from 'stripe';
import { createCheckoutLink, createCustomerIfNull, generateCustomerPortalLink, hasSubscription } from '@/helpers/billing';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
    apiVersion: '2023-10-16',
});


const DashboardPage = async () => {
    const user = await getServerUser()
    if(!user){
        return(
            <div>
                <Link href={'/login'}>Login</Link>
            </div>
        )
    }
    const email = user.email
    await createCustomerIfNull()

    const currentUser = await prisma.user.findFirst({
        where: {
            email: email
        }
    })
    const manage_link = await generateCustomerPortalLink(""+currentUser?.stripe_customer_id)


const hasSub = await hasSubscription()
const checkout_link = await createCheckoutLink(""+currentUser?.stripe_customer_id)
  return (
    <div>
        <span>Welcome, {email}</span>
        <div>
            <Link href={""+manage_link}>
                Manage Billing
            </Link>
        </div>
        <div>
            {
                hasSub ? 
                <div>
                   subscribed
                </div>

                : 

                <div>
                     free plan
                     <Link href={""+checkout_link}>
                        UpGrade
                     </Link>
                </div>
            }
        </div>
    </div>
  )
}

export default DashboardPage