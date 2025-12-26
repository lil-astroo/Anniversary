import React, { useEffect, useMemo, useState } from 'react';
import TimeTravelBtn from '../components/TimeTravelBtn';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import img2 from '../assets/img/date.jpg'
import img1 from '../assets/img/drawing.jpg'

import '../assets/styles/TimeLine.css';

export default function TimeLine() {

    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log("Particles Loaded:", container);
    };

    const options = useMemo(() => ({
        background: {
            color: "transparent",
        },
        fpsLimit: 60,
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    area: 800,
                },
            },
            color: {
                value: "#ffffff",
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: { min: 0.4, max: 0.8 },
            },
            size: {
                size: { value: { min: 2, max: 5 } },
                random: true,
            },
            move: {
                enable: true,
                direction: "bottom",
                speed: { min: 0.5, max: 2 },
                straight: false,
                outModes: {
                    default: "out",
                },
            },
            wobble: {
                enable: true,
                distance: 10,
                speed: 10,
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: false,
                },
                onClick: {
                    enable: false,
                },
            },
        },
        detectRetina: true,
    }), []);

    return (
        <React.Fragment>
            {init && (
                <Particles
                    id="tsparticles"
                    options={options}
                    particlesLoaded={particlesLoaded}
                />
            )}
            <div className="page-wrapper">
                <div className="section-timeline-heading">
                    <div className="container">
                        <div className="padding-vertical-xlarge">
                            <div className="timeline-main_heading-wrapper">
                                <div className="margin-bottom-medium">
                                    <h2>365 Days Of Love</h2>
                                </div>
                                <p className="paragraph-large">
                                    بعد از گذشت یک سال از باهم بودنمون وقتشه این یک ساله پر از فراز و نشیب رو رو باهم مرور کنیم و به یاد بیاریم که چقدر خوشبختیم که همدیگه رو داریم. این تایم‌لاین پر از لحظات خاص و خاطره‌ انگیزه که باهم ساختیم و هر کدومشون نشونه‌ای از عشقمون به همدیگه‌ ست
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-timeline">
                    <div className="container">
                        <div className="timeline_component">
                            <div className="timeline_progress">
                                <div className="timeline_progress-bar"></div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">December 22 2024</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-xlarge">
                                        <div className="timeline_text">
                                            ساعت 12:02 ظهر اولین باری که من ایدیت از امین با هزار بدبختی گرفتم و بهت پیام دادم هیچ ایده ای نداشتم که دارم با کی حرف میزنم نمیدونستم دارم با دختری حرف میزنم که قرار بود بشه همه زندگیم. از دره شوخی و خنده وارد شدم و تو هم با همون شوخ طبعی و خنده هات جوابم رو دادی. شاید از همون ثانیه اول نمیدونستم قراره تا کجا پیش بریم چون به خودم گفته بودم فعلا توی رابطه ای نمیرم ولی خب توی همون لحظه اول یه حس عجیبی بهم گفت که این دختر قراره خیلی مهم بشه برام و قراره زندگیمو تغییر بده
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">December 23</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            اولین شبی که باهم حرف زدیم اونشب خاص ترین شب بود برام الان که دارم چتا رو میخونم یه حس عجیبی گرفتتم شاید چون توی چتا به اندازه الان عاشقم نیستی ولی خب همون شب بود که فهمیدم چقدر دوست دارم باهات باشم و چقدر دلم میخواد بیشتر بشناسمت
                                            <br />
                                            فردا صبحش دیگه تنها نبودم برای اولین بار یکی رو داشتم که باهاش حرف بزنم و روزم تعریف کنم. اون روز برای اولین بار اهنگ های مورد علاقمون شیر کردیم و حس صمیمتون بیشترو بیشتر میشد و بیشتر باهم آشنا میشدیم
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">December 24</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            برای اولین بار صورتت رو دیدم برام فیلم فرستادی و من اون لحظه قلبم تندتر زد. یه دختر زیبا و پرفکت و مهم تر از همه نچرال که منو جذب خودش کرد. از همون لحظه بود که فهمیدم چقدر خوش شانسم که با همچین دختری اشنا شدم و اگه شانس باهام یار باشه شاید یه روزی بتونم کنارش باشم
                                            <br /><br />
                                            ساعت 10:22 شب بود که با یه عکس سوپرایزم کردی بدون اینکه من درخواست کرده باشم خودت با خواست خودت خواستی نشون بدی خودت بهم و من اون لحظه برام غیر قابل باور بود که خودت برام عکس فرستاده بودی
                                            <br /><br />
                                            ساعت 10:30 شب بود که خودم اماده کردم و بهت پیام دادم:
                                            <br />
                                            ?is my angel awake
                                            <br /><br />
                                            میخواستم که حسم بهت بگم میخواستم بدونی که قصدم از این رابطه چیه و بدونی که میخوام تا ابد همراهت باشم.
                                            <br /><br />
                                            توهم نگران بودی نگران بودی که بهم اعتماد کنی و من آدم مناسبی نباشم برات. ولی تو هفت روز وقت دادی بهم تا سعی کنم یه حسی رو بینمون
                                            ایجاد کنم
                                            <br /><br />
                                            اون شب تا 4 صبح بیدار موندیم و کلی صحبت های عمیق و خاص درمورد زندگی هامون بهم گفتیم اکانت هامون باهم رد بدل کردیم و کلی بازی کردیم
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">December 25</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            اون روز صبح برای اولین بار صدای همدیگه رو شنیدیم و من مطمئنم که اون قشنگ ترین صدایی که تو عمرم شنیدم :)
                                            <br /><br />
                                            15:07 اولین فیلممون رو باهم دیدیم مطمئنم که اسمشو یادته بچم واقعا برای اول رابطه فیلم قشنگ و پر احساسی بود (هیسسسس میدونم داری چی میگی)
                                            <br /><br />
                                            23:29 بود که برای اولین برات یه سایت درست کردم و اولین سوپرایزم رو بهت دادم :) قطعااااا یادته چی بود بچمممم
                                            <br />
                                            اون بین ذوق کردنات داشتی یه لاس زدن های ریزی هم انجام میدادی که مخمو یواش یواش زدی خانم خوشگله 👀
                                            <br /><br />
                                            اخرای شب plato رو نصب کردی و اون شد شروع کلی خاطره های جدید و کیوت :)
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">December 31</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            7 روز گذشت, هفت روزی که ثانیه به ثانیش مثل رویا بود ولی وقتش رسیده بود که تصمیم سرنوشت سازمون رو بگیری قلبم داشت تند تند میزد و نگران بودم نمیدونستم قراره چی بشه
                                            <br /><br />
                                            ساعت 12:03 بود که جوابم دادی و قرار شد باهم پرواز کنیم در کنار هم پرواز کنیم و کم نیاریم اگه یکی داشت کم میوورد بال هامون رو به اشتراک بزاریم و کمک کنیم یه یوقت یکی سقوط نکنه
                                            <br /><br />
                                            و این بهترین روزه تمام زندگیم بود و مهم تر از همه شروع یک زندگی جدید با تو
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">JAN 1</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            برای اولین بار بود که من جمله معروفمون رو بهت گفتم :)
                                            Till Last Breath :)❤
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">JAN 7</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            اولین نقاشی هایی که باهم کشیدیم رو یادته بچم :)
                                        </div>
                                    </div>
                                    <div className="timeline_image-wrapper">
                                        <img
                                            src={img1}
                                            loading="lazy"
                                            width="480"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">JAN 8</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            اولین باری که یه فرشته کوچولو وارد اکانتم شد و یک ساله که مونده و قراره بمونه :)))
                                            <br /><br />
                                            البتههههه منم به زور وارد شدمممممم 😂😂
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">JAN 31</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            اولیییییییین ماهگردمووووووووووووون یکیییی از قشنگگگگ ترییینننن اخر ماه هاییی که تو عمرم داشتممممم
                                            <br /><br />
                                            امیدوارم ادیتمو یادت مونده باشه بیا باهم دوباره ببینیمش :)

                                            <TimeTravelBtn
                                                title='Travel to Jan 31 2025'
                                                link='https://t.me/astrotimecapsule/2'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">Feb 13</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            اولین ولنتایتمون باهم دیگهههه که یه سبک متفاوت داشتت

                                            <TimeTravelBtn
                                                title='Travel to Feb 13 2025'
                                                link='https://t.me/astrotimecapsule/8'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">Feb 16</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            ما ایرانی هستیم دیگهه پسسس بایددد سپندارمذگان روز عشق ایرانی ها هم جشن بگیریمممم :))))

                                            <TimeTravelBtn
                                                title='Travel to Feb 16 2025'
                                                link='https://t.me/astrotimecapsule/21'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">Feb 18</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            50 روز گذشت از عشق قشنگمون و به جرات میتونم بگم بهترین 50 روزه عمرم بود

                                            <TimeTravelBtn
                                                title='Travel to Feb 18 2025'
                                                link='https://t.me/astrotimecapsule/31'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">Not Found! 404 Error</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            متاسفانه اکس لاشیت اومده بود و داشت گند میزد به اعصابت و داشت همه چیو بهم میریخت ولی باهم تونستیم ازش بگذریم مگه نه؟ :)

                                            <TimeTravelBtn
                                                title='Travel to ?? ?? 2025'
                                                link={null}
                                                error
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">MAR 1-2</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            اولین روزی که کانالمون رو ساختیم و توش پست گذاشتیم :)

                                            <TimeTravelBtn
                                                title='Travel to MAR 1 2025'
                                                link='https://t.me/astrotimecapsule/34'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">APR 18</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            و بلاخره, اولین باری که همو دیدیم :) اولین باری که کنار هم بودیم همو بغل کردیم همو بوسیدیم و باهم وقت گذروندیم :)))

                                            <TimeTravelBtn
                                                title='Travel to APR 18 2025'
                                                link='https://t.me/astrotimecapsule/37'
                                            />
                                        </div>
                                    </div>
                                    <div className="timeline_image-wrapper">
                                        <img
                                            src={img2}
                                            loading="lazy"
                                            width="480"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">JUN 17</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            اخریین امتحان سال 11ام رو دادی و با موفقیت یک سال سخت رو پشت سر گذاشتییییی :))))
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">JUN 22</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            یکی از دیت های باحالمون که نقاشی نصفه کشیدیم و 15 سوال سه جوابه بازی کردیممم

                                            <TimeTravelBtn
                                                title='Travel to JUN 22 2025'
                                                link='https://t.me/astrotimecapsule/40'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">JULY 12</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            تولدمووووو سوپراااایز کردییییییی و خیلییییییییییی خفن بودددددددد :))))))

                                            <TimeTravelBtn
                                                title='Travel to JULY 12 2025'
                                                link='https://t.me/astrotimecapsule/55'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">SEPT 13</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            دیت دوممون باهم کیک خوردیم رفتیم کافه و کنار هم بودیم :) بهت هدیه دادم درسته بهم کش مو ندادی ولی عوضش کنار دیوار اون ساختمون یه چیز خیلی خاص تر بهم دادی :)) ❤

                                            <TimeTravelBtn
                                                title='Travel to SEPT 13 2025'
                                                link='https://t.me/astrotimecapsule/63'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">NOW</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            امیدوارم از سوپرایز امروز هم خوشت اومده باشه:)
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className="timeline_left">
                                    <div className="timeline_date-text">FUTURE</div>
                                </div>
                                <div className="timeline_centre">
                                    <div className="timeline_circle"></div>
                                </div>
                                <div className="timeline_right">
                                    <div className="margin-bottom-medium">
                                        <div className="timeline_text">
                                            به نظرت اینده چه شکلیه؟
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="overlay-fade-top"></div>
                            <div className="overlay-fade-bottom"></div>
                        </div>
                    </div>

                    <div style={{ height: '50vh' }}></div>
                </div>
            </div>
        </React.Fragment>
    );
}
