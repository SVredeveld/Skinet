using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Identity.Migrations
{
    public partial class HouseNumberProble : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HouseNumber",
                table: "Address");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "HouseNumber",
                table: "Address",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
