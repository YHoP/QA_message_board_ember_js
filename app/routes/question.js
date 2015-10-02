import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
      editQuestion(question, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key] !== undefined) {
            question.set(key, params[key]);
          }
        });
        question.save();
      }

    //   saveComment(params) {
    //     var newComment = this.store.createRecord('comment', params);
    //     var post = params.post;
    //     post.get('comments').addObject(newComment);
    //     newComment.save().then(function() {
    //       return post.save();
    //     });
    //     this.transitionTo('post', params.post);
    //   },
    //
    //   updateComment(comment, params) {
    //     debugger;
    //     Object.keys(params).forEach(function(key) {
    //       if(params[key] !== undefined) {
    //         comment.set(key, params[key]);
    //       }
    //     });
    //     comment.save();
    //   }
    }
});
