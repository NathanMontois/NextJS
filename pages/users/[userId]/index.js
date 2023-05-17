import { useRouter } from 'next/router';

export default function userDetails() {
    const router = useRouter();
    const userId = router.query.userId;
    const optionId = router.query.optionId;

    return (
        <div>
            <h1>User {userId}, option {optionId}</h1>
        </div>
    );
}