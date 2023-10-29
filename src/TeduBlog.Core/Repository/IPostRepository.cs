﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeduBlog.Core.Domain.Content;
using TeduBlog.Core.SeedWorks;

namespace TeduBlog.Core.Repository
{
    public interface IPostRepository: IRepository<Post, Guid>
    {
        Task<List<Post>> GetPopularPostsAsync(int count);
    }
}
