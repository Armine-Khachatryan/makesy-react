import React from 'react';
import { useForm } from 'react-hook-form';
import Line from '../../../assets/images/BlogImages/Line.svg';
import classes from './BlogReportComponent.module.css';

const BlogReportComponent=(props)=>{

    const { register, handleSubmit, reset, formState: { errors }  } = useForm({
        defaultValues: {
            email: '',
        },
        mode: "onSubmit",
    });


    const onSubmit = data => {
        props.onSetTrue(true)
        reset();
    };


    return(
        <div className={classes.whole}>
            <div className={classes.inside}>
                <div className={classes.titleDiv}>
                    <div className={classes.title}>Enter your email to download full report for </div>
                    <div className={classes.blueDiv}>
                        <div className={classes.free}>FREE</div>
                        <img src={Line} alt={""}/>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.inputDiv}>
                        <label htmlFor="email" className={classes.label}>Email</label>
                        <input
                            className={`${classes.inputStyle} ${errors.email && classes.invalid}`}
                            {...register("email", {
                                required: 'Email is required',
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Invalid email address'
                                }
                            })}
                            placeholder="makesy@gmail.com"
                        />
                        {errors.email && <span className={classes.error}>{errors.email.message}</span>}
                    </div>
                    <button className={"submitBtn"} type="submit">View Report</button>
                </form>
            </div>

        </div>
    )
}

export default BlogReportComponent;