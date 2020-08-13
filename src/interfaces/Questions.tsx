export default interface Question {
    question: string;
    answers: Array<{
        answer: string;
        correct?: boolean;
    }>;
}
