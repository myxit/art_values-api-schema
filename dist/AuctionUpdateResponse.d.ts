import AuctionStatus from './AutionStatus';
declare class AuctionUpdateResponse {
    readonly id?: string;
    value: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    /**
     * Scheduled starting time
     */
    startAt?: Date;
    /**
     * Scheduled finishing auction time
     */
    finishAt?: Date;
    /**
     * Fact starting time
     */
    startedAt?: Date;
    /**
     * Fact finishing time
     */
    finishedAt?: Date;
    status: AuctionStatus;
    lastBidValue: Number;
}
export default AuctionUpdateResponse;