import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUsersRole1732654208103 implements MigrationInterface {
  name = 'AddUsersRole1732654208103';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."users_role_enum" AS ENUM('USER')`,
    );
    await queryRunner.query(`ALTER TABLE "users"
        ADD "role" "public"."users_role_enum" NOT NULL DEFAULT 'USER'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users"
        DROP COLUMN "role"`);
    await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
  }
}
