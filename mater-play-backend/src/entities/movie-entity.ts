import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('movie')
export class Movie {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    title: string;

    @Column({ type: 'text', nullable: false })
    descripition: string;

    @Column({ name: 'age-rating' })
    ageRatting: string;

    @Column({ nullable: false })
    poster: string;
}