import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateMeasures1595441851294 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'measures',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'client_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'height',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'weight',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'neck',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'torax_top',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'torax_bottom',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'bust',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'waist',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'abdomen',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'hip',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'thigh_left',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'thigh_right',
            type: 'float',
            isNullable: true,
          },

          {
            name: 'calf_left',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'calf_right',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'arm_left',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'arm_right',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'forearm_left',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'forearm_right',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'MeasuresClients',
            referencedTableName: 'clients',
            referencedColumnNames: ['id'],
            columnNames: ['client_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('measures')
  }
}
