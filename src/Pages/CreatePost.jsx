import React from 'react'

const CreatePost = () => {
    return (
        <>
            <div>
                <span className="text-2xl font-semibold text-purple-500 drop-blur">Create A Post</span >
            </div>
            <div className="container mx-auto px-2 py-2 mt-5">
                <div className="max-w-4xl mx-auto bg-[#2b2b2b54] rounded-lg shadow-lg">
                    <div className="p-10">
                        <form>
                            <div className="mb-4">
                                <label for="title" className="block text-xl font-semibold text-purple-700">Title</label>
                                <input type="text" id="title" name="title" className="w-full px-3 py-2 border border-purple-900 rounded-md focus:outline-none focus:border-purple-500 text-black" placeholder="Enter title" required />
                            </div>
                            <div className="mb-4">
                                <label for="content" className="block text-xl font-semibold text-purple-700">Description</label>
                                <textarea id="content" name="content" className="w-full px-3 py-2 border border-purple-900 rounded-md focus:outline-none focus:border-purple-500 text-black" placeholder="Enter Description" rows="4" required ></textarea>
                            </div>
                            <div className="mb-4">
                                <label for="image" className="block text-xl font-semibold text-purple-700 mb-3">Upload A File</label>
                                <input type="file" id="image" name="image" className="w-full px-2 py-2 " />
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded">Create Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </ >
    )
}

export default CreatePost