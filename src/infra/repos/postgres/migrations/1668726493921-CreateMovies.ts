import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMovies1668726493921 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'movies',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar(200)'
                    },
                    {
                        name: 'year',
                        type: 'string'
                    },
                    {
                        name: 'description',
                        type: 'varchar(200)'
                    },
                    {
                        name: 'length',
                        type: 'int'
                    },
                    {
                        name: 'gender',
                        type: 'varchar(200)'
                    },
                    {
                        name: 'rating',
                        type: 'float'
                    },
                    {
                        name: 'watched',
                        type: 'varchar(200)'
                    },
                    {
                        name: 'image',
                        type: 'varchar(200)'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'deleted_at',
                        type: 'timestamp',
                        isNullable: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('movies')
    }

}
