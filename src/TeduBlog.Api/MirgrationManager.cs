﻿using Microsoft.EntityFrameworkCore;
using TeduBlog.Data;

namespace TeduBlog.Api
{
    public static class MirgrationManager
    {
        public static WebApplication MigrationDatabase(this WebApplication app)
        {
            using (var scope = app.Services.CreateScope())
            {
                using (var context = scope.ServiceProvider.GetRequiredService<TeduDBContext>())
                {
                    context.Database.Migrate();
                    new DataSeeder().SeedAsync(context).Wait();
                }
            }
            return app;
        }
    }
}