﻿using AutoMapper;
using TeduBlog.Core.Repository;
using TeduBlog.Core.SeedWorks;
using TeduBlog.Data.Repository;

namespace TeduBlog.Data.SeedWorks
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly TeduDBContext _context;

        public UnitOfWork(TeduDBContext context, IMapper mapper)
        {
            _context = context;
            Posts = new PostRepository(context, mapper);
        }
        public IPostRepository Posts { get; private set; }

        public async Task<int> CompleteAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}