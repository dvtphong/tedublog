using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeduBlog.Data
{
    public class TeduDBContextFactory : IDesignTimeDbContextFactory<TeduDBContext>
    {
        public TeduDBContext CreateDbContext(string[] args)
        {
            var configuration = new ConfigurationBuilder()
                 .SetBasePath(Directory.GetCurrentDirectory())
                 .AddJsonFile("appsettings.json")
                 .Build();
            var builder = new DbContextOptionsBuilder<TeduDBContext>();
            builder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
            return new TeduDBContext(builder.Options);
        }
    }
}
