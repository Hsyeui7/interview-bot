import dayjs from 'dayjs';
import React from 'react';
import Image from 'next/image';
import { getRandomInterviewCover } from "@/lib/utils";
const InterviewCard = ({ interviewId, userId, role, type, techstack, createdAt, }: InterviewCardProps) => {
    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? "mixed" : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format("MMM D, YYYY");
    return (
        <div>
            <div className="card-border w-[360px] max-sm:w-full min-h-96">
                <div className="card-interview">
                    <div>
                        <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
                            <p className="badge-text">{normalizedType}</p>
                        </div>

                        <Image src={getRandomInterviewCover()} alt="Cover image" width={90} height={90} className="rounded-full object-fit size-[90px]" />

                        <h3 className='mt-5 capitalize'>{role} Interview</h3>
                        <div className='flex flex-row gap-5 mt-3'>
                            <div className='flex flex-row gap-2'>
                                <Image src="/calendar.svg" alt="calendar" width={22} height={22} />
                                <p>{formattedDate}</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-2 items-center">
                            <Image src="/star.svg" width={22} height={22} alt="star" />
                            <p>{feedback?.totalScore || "---"}/100</p>
                        </div>
                        <p className="line-clamp-2 mt-5">
                        {feedback?.finalAssessment ||
                            "You haven't taken this interview yet. Take it now to improve your skills."}
                    </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default InterviewCard;
