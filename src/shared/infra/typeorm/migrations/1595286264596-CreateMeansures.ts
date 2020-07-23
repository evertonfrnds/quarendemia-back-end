import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateMeasures1595286264596 implements MigrationInterface {
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
          },
          {
            name: 'height',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'weight',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'neck',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'torax_top',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'torax_bottom',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'bust',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'waist',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'abdomen',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'qualdril',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'thigh_left',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'thigh_right',
            type: 'decimal',
            isNullable: false,
          },

          {
            name: 'calf_left',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'calf_right',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'arm_left',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'arm_right',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'forearm_left',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'foearm_right',
            type: 'decimal',
            isNullable: false,
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
