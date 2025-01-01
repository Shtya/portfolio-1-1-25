import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'


export async function POST (req){
    const {name , email , phone , message} = await req.json() ;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shtya54@gmail.com',
            pass: 'hpzxwahkldjnyjkv',
        },
    });

    // Create email message
    const mailOptions = {
        from: email,
        to: 'shtya54@gmail.com',
        subject: 'New Contact Form Submission',
        text: `
            \nName: ${name}
            \nPhone: ${phone}
            \nEmail: ${email}
            \nMessage: ${message} 
        `,
    };

    try{
        await transporter.sendMail(mailOptions);
        return NextResponse.json({message:"Email send  Successfully" ,status:true})
    }catch(err){
        return NextResponse.json({message :"Fail to send emaill " ,status:false} )
    }
}